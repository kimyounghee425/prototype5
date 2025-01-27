import { useState } from "react";
import { Button, Flex, Input, Box, Text } from "@chakra-ui/react";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export function ReservationForm() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.replace(/[^0-9]/g, "");
    let formattedInput = input;

    if (input.length > 3 && input.length <= 7) {
      formattedInput = `${input.slice(0, 3)}-${input.slice(3)}`;
    } else if (input.length > 7) {
      formattedInput = `${input.slice(0, 3)}-${input.slice(3, 7)}-${input.slice(
        7,
        11
      )}`;
    }
    setPhoneNumber(formattedInput);
  };

  const handleReservation = async () => {
    // 중복 요청 방지

    if (isSubmitting) {
      return;
    }

    if (!phoneNumber.startsWith("010") || phoneNumber.length !== 13) {
      console.log(JSON.stringify({ phoneNumber }));
      window.alert("올바른 전화번호 형식이 아닙니다.");
      setPhoneNumber("");
      return;
    }

    try {
      setIsSubmitting(true);

      const response = await fetch(`${BASE_URL}/api/log-phone-number/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phone_number: phoneNumber, idea_key: "5" }), // 스포츠매칭 5번
      });

      const data = await response.json();

      if (data.message === "saved phone number") {
        window.alert(
          "사전 예약이 완료되었습니다! 자세한 내용은 출시 후에 전달드리겠습니다!"
        );
        setPhoneNumber("");
      } else if (data.message === "already existing phone number") {
        window.alert("이미 등록된 전화번호입니다.");
      }
    } catch (error) {
      window.alert(
        `처리 중 문제가 발생했습니다. 다시 시도해 주세요.\n에러내용 : ${error}`
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Flex
      direction={["row", null, "row"]} // 반응형 정렬
      justifyContent="center"
      alignItems="center"
      mb="48px"
      gap="10px"
    >
      <Box
        maxW="400px" // 최대 너비 제한
      >
        <Input
          value={phoneNumber}
          onChange={handleInputChange}
          placeholder="010-1234-5678"
          borderRadius="lg"
          width={["264px", null, "400px"]}
          height={["40px", null, "48px"]}
          fontSize="16px"
          border="none"
          bg="#E9EAED"
          color="#gray.400"
          _hover={{ outline: "1px solid #cf7f0f" }}
          _focus={{
            outline: "1px solid #cf7f0f",
          }}
          _placeholder={{
            color: "gray.400",
          }}
        />
      </Box>
      <Box>
        <Button
          onClick={handleReservation}
          borderRadius="lg"
          width={["84px", null, "92px"]}
          height={["40px", null, "48px"]}
          bg="#cf7f0f"
          color="white"
          fontSize="16px"
          px={8}
          _hover={{ bg: "#945d10" }}
          _active={{ bg: "#945d10" }}
        >
          사전 예약
        </Button>
      </Box>
    </Flex>
  );
}

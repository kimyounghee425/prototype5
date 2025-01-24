import { Box, Text, VStack, Container } from "@chakra-ui/react";

export function HeaderSection() {
  return (
    <Container centerContent maxWidth="100%" padding={0}>
      <VStack width="100%">
        <Box height={["59px", null, "80px"]} textAlign="left" width="100%">
          {/* 최상단 헤더 */}
          <Box height="35px" ml="16px" mt={["12px", null, "22px"]}>
            {/* 왜 ㅊ 글자 피그마랑 모양이 다르지 */}
            <Text
              fontSize={["24px", null, "24px"]}
              color="#cf7f0f"
              fontWeight="bold"
              fontFamily="Be Vietnam"
            >
              WEKOOKMIN
            </Text>
          </Box>
        </Box>
        {/* 원래 mb 48px 인데 마지막줄 한글자 추가되어서 마진 24px 로 수정 */}
        <VStack textAlign="center" mb="24px">
          {/* 구분선 */}
          <Box
            width="100vw"
            height={["2px", null, "3px"]}
            bg="#cf7f0f"
            mb={["13px", null, "40px"]}
            mt={"-8px"}
          />
          {/* 초록 텍스트박스 */}
          <Box
            bg="linear-gradient(90deg, #cfa20d, #cf7f0f)"
            width={["295px", null, "486px"]}
            height={["80px", null, "60px"]}
            borderRadius="xl"
            display="flex"
            alignItems="center"
            justifyContent="center"
            mb="16px"
            mx="auto"
          >
            <Box
              fontSize={["16px", null, "20px"]}
              fontWeight="600"
              color="white"
              textAlign="center"
              lineHeight={["24px", null, "28px"]}
            >
              {/* 모바일 화면 */}
              <Text display={["block", null, "none"]}>
                [선착순 50명] <br /> 사전 예약하고 무료로 먼저 사용해보세요!
              </Text>
              {/* 데스크탑 화면 */}
              <Text display={["none", "none", "block"]}>
                [선착순 50명] 사전 예약하고 무료로 먼저 사용해보세요!
              </Text>
            </Box>
          </Box>

          {/* 굵은 글씨 소개 */}
          <Box
            fontSize={["28px", null, "40px"]}
            width={["259px", null, "561px"]}
            fontWeight="700"
            color="black"
            lineHeight={["36px", null, "52px"]}
            mb="8px"
          >
            {/* 모바일 화면 */}
            <Text display={["block", "block", "none"]}>
              생성형 AI기반의 정확한
              <br />
              위치 정보를 찾아주는
              <br />
              인공지능 기반의 MAP
            </Text>

            {/* 데스크탑 화면 */}
            <Text display={["none", "none", "block"]}>
              여럿이서 하면 더 재밌잖아요
              <br />
              스포츠를 공유하세요
            </Text>
          </Box>
        </VStack>
      </VStack>
    </Container>
  );
}

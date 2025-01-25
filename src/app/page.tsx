"use client";
import "./globals.css";
import { Box, Container } from "@chakra-ui/react";
import { HeaderSection } from "./components/HeaderSection";
import { ReservationForm } from "./components/ReservationForm";
import { VideoSection } from "./components/VideoSection";
import { useEffect } from "react";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export default function Home() {
  useEffect(() => {
    const userVisited = "visited";

    const countVisited = async () => {
      if (true) {
        console.log("post 메서드 수행")
        try {
          // 스포츠매칭 5번
          const response = await fetch(`${BASE_URL}/api/log-visit/`, {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({
              idea_key: "5",
            }),
          });
          if (!response.ok) {
            throw new Error("서버 오류 발생");
          }
          const data = await response.json();

          if (data.message === "save") {
            console.log("성공");
          } else if (data.message === "already exists") {
            console.log("중복 기록");
          }
          // 오류때는 키 값 달라서 뺌
          else {
            console.log("서버 에러");
          }

          localStorage.setItem(userVisited, "true");
        } catch (error) {
          console.error("catch 에러", error);
        }
      }
    };
    countVisited();
  }, []);

  return (
    <Box m={0} p={0} backgroundColor="white" width="100%" height="100vh">
      <Container centerContent maxWidth="100%" paddingX={0} paddingY={0}>
        <HeaderSection />
        <ReservationForm />
        <VideoSection />
      </Container>
    </Box>
  );
}

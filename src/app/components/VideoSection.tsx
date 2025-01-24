import { Box, Container } from "@chakra-ui/react";

export function VideoSection() {
  return (
    <Container centerContent>
      <Box
        // textAlign="center"
        width={["358px", "800px"]}
        height={["207.2px", "463.32px"]}
        bg="white"
        shadow="md"
        borderRadius="xl"
        overflow="hidden"
        maxWidth="900px" // 최대 크기 제한
        minWidth="350px"
        p={0}
        mb="200px"
      >
        <video
          controls
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          muted
          autoPlay
          playsInline
        >
          <source src="/prototype5_sports.mp4" type="video/mp4" />
          동영상이 지원되지 않습니다.
        </video>
      </Box>
    </Container>
  );
}

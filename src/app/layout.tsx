"use client";

import { Box, Container } from "@chakra-ui/react";
import { Provider as ChakraProvider } from "@/ui/provider";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>
          <Box>
            <Container>{children}</Container>
          </Box>
        </ChakraProvider>
      </body>
    </html>
  );
}

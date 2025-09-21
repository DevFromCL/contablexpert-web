"use client";

import Header from "@/components/layout/nav/Header";
import Container from "@/components/layout/page/Container";
import MainContainer from "@/components/layout/page/MainContainer";

export default function Home() {

  return (
    <MainContainer>
      <Header />
      <Container>
        <main className="flex flex-col items-center justify-center h-[calc(100vh-100px)] gap-2">
          <h1 className="text-5xl font-bold">Sitio en construccion</h1>
          <p className="">(Landing page)</p>
        </main>
      </Container>
    </MainContainer>
  );
}
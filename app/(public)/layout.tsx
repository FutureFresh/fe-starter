"use client";

import "@mantine/core/styles.css";
import {
  ColorSchemeScript,
  MantineProvider,
  AppShell,
  ScrollArea,
} from "@mantine/core";

const metadata = {
  title: "My Mantine app",
  description: "I have followed setup instructions carefully",
};

export function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>
          <AppShell navbar={{ width: 300, breakpoint: 0 }}>
            <AppShell.Navbar>
              <AppShell.Section>Navbar header</AppShell.Section>
              <AppShell.Section grow component={ScrollArea}>
                Navbar main section, it will
              </AppShell.Section>
              <AppShell.Section>
                Navbar footer always at the bottom
              </AppShell.Section>
            </AppShell.Navbar>
            <AppShell.Main>{children}</AppShell.Main>
          </AppShell>
        </MantineProvider>
      </body>
    </html>
  );
}

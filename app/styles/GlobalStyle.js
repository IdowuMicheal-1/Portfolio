'use client'
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*, *::before, *::after {
    box-sizing: border-box;
    font-family: var(--font-raleway,san-serif);
  }

  body{
    padding-top: 30px;
  }


`
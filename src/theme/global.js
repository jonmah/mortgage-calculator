import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  
  :root {
    --blue: #007bff;
    --indigo: #6610f2;
    --purple: #6f42c1;
    --pink: #e83e8c;
    --red: #dc3545;
    --orange: #fd7e14;
    --yellow: #ffc107;
    --green: #28a745;
    --teal: #20c997;
    --cyan: #17a2b8;
    --white: #fff;
    --gray: #6c757d;
    --gray-dark: #343a40;
    --primary: #007bff;
    --secondary: #6c757d;
    --success: #28a745;
    --info: #17a2b8;
    --warning: #ffc107;
    --danger: #dc3545;
    --light: #f8f9fa;
    --dark: #343a40;
    --disabled: #abb9c6;
    --breakpoint-xs: 0;
    --breakpoint-sm: 376px;
    --breakpoint-md: 768px;
    --breakpoint-lg: 992px;
    --breakpoint-xl: 1200px;
    --field-border: 1px solid #ced4da;
    --field-error: 0 0 5px #ff4f65;
    --font-family-sans-serif: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    --font-family-monospace: SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
    --nav-height: 4.2rem;
    --nav-padding-x: 1rem;
    --nav-padding-y: 0.5rem;
  }

  body {
    align-items: center;
    background: var(--white);
    color: var(--gray);
    display: flex;
    flex-direction: column;
    font-family: var(--font-family-sans-serif);
    height: 100vh;
    justify-content: center;
    margin: 0;
    overflow: hidden;
    padding: 0;
    transition: all 0.25s linear;
  }
  
  #root {
    bottom: 0;
    display: flex;
    flex-direction: column;
    height: 100%;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }
  `

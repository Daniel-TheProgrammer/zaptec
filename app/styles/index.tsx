"use client";

import styled from "styled-components";

export const Nav = styled.nav`
  background-color: transparent;
  width: 100%;
  z-index: 100;
  position: fixed;
  top: 0;
`;

export const InnerContainer = styled.div`
  max-width: none;
  height: clamp(4.84rem, 5.97vw, 6.72rem);
  justify-content: space-between;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
  max-width: clamp(81rem, 100vw, 112.5rem);
  @media (min-width: 1280px) {
    padding-right: clamp(3.97rem, 4.9vw, 5.51rem);
    padding-left: clamp(3.97rem, 4.9vw, 5.51rem);
  }
  
`;

export const MenuLeft = styled.div`
  gap: clamp(7.09rem, 8.76vw, 9.85rem);
  align-items: center;
  display: flex;

  & a {
    font-size: 1.4375rem;
    color: inherit;
    text-decoration: inherit;
  }
`;

export const Logo = () => {
  return (
    <svg
      viewBox="0 0 94 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="logo r-w-[5.875] fill-asphalt transition-colors duration-300"
    >
      <path d="M46.665 19.68v1.578H36.43v-1.39L44.328 9.32h-7.805V7.742h10.072v1.39L38.696 19.68h7.969ZM52.904 21.094a4.078 4.078 0 0 1-1.752.33 3.448 3.448 0 0 1-2.314-.777c-.607-.495-.934-1.248-.911-2.049-.023-.777.28-1.53.865-2.025.584-.518 1.519-.918 2.827-1.177l2.384-.518v-.424a1.726 1.726 0 0 0-.491-1.318c-.327-.306-.794-.448-1.449-.448a2.39 2.39 0 0 0-1.472.424 2.206 2.206 0 0 0-.794 1.271l-1.59-.423a3.546 3.546 0 0 1 1.426-2.002 4.056 4.056 0 0 1 2.477-.753c1.145 0 2.01.282 2.617.824.608.565.912 1.342.912 2.354v4.804a.686.686 0 0 0 .28.636c.234.117.514.14.771.07v1.366c-.771.094-1.355.047-1.776-.141-.42-.165-.7-.542-.794-.99-.28.424-.701.754-1.215.966Zm.351-1.648c.49-.353.771-.918.771-1.53V16.22l-1.916.424c-.935.188-1.59.424-1.963.73-.35.282-.56.73-.56 1.177-.024.424.14.848.466 1.13.374.283.818.448 1.286.424.7-.023 1.379-.235 1.916-.66ZM65.078 21.048a3.725 3.725 0 0 1-1.799.4 3.871 3.871 0 0 1-1.776-.424c-.514-.283-.958-.683-1.239-1.2v4.826h-1.682V11.394h1.682v1.436a3.383 3.383 0 0 1 1.262-1.177 3.539 3.539 0 0 1 1.776-.424c.631 0 1.239.141 1.823.4.561.283 1.028.683 1.402 1.178.35.494.608 1.036.771 1.6a7.222 7.222 0 0 1 0 3.862 4.887 4.887 0 0 1-.794 1.601c-.42.518-.888.919-1.426 1.178Zm-4.112-7.464c-.514.588-.772 1.389-.772 2.401v.707c0 1.012.258 1.813.772 2.401a2.682 2.682 0 0 0 3.809.165c.093-.094.187-.188.257-.282.514-.66.77-1.53.77-2.638 0-1.106-.256-1.977-.77-2.637a2.692 2.692 0 0 0-3.81-.353c-.07.07-.163.165-.256.236ZM70.525 20.764c-.397-.4-.608-1.013-.608-1.86v-6.052h-1.519v-1.46h1.52V8.52h1.658v2.872h2.22v1.46h-2.22v5.792c-.023.33.07.683.28.942.188.189.562.283 1.076.283.187 0 .374 0 .56-.024.164-.023.328-.047.491-.094v1.46a7.235 7.235 0 0 1-.7.118 8.452 8.452 0 0 1-.772.047c-.911-.024-1.565-.212-1.986-.613ZM77.98 21.069a3.952 3.952 0 0 1-1.495-1.13 4.679 4.679 0 0 1-.888-1.601 6.39 6.39 0 0 1-.304-2.002c0-.659.093-1.318.304-1.954.187-.589.49-1.154.888-1.625a4.127 4.127 0 0 1 1.472-1.153 4.572 4.572 0 0 1 1.846-.4c1.285 0 2.29.447 3.038 1.318.748.871 1.122 2.048 1.122 3.508v.565h-7.081c.047 1.036.35 1.86.888 2.473a2.69 2.69 0 0 0 2.103.918c.584.023 1.145-.165 1.636-.495.444-.33.771-.824.888-1.389l1.495.542a3.866 3.866 0 0 1-1.518 2.072 4.52 4.52 0 0 1-2.5.753 4.707 4.707 0 0 1-1.894-.4Zm-.023-7.7a3.376 3.376 0 0 0-.958 1.931h5.281a2.93 2.93 0 0 0-.701-1.93 2.253 2.253 0 0 0-1.8-.707c-.677 0-1.331.236-1.822.707ZM87.864 13.674c-.538.66-.795 1.554-.795 2.661s.257 1.978.795 2.637a2.593 2.593 0 0 0 2.126.99 2.274 2.274 0 0 0 1.566-.542c.444-.4.748-.942.865-1.555l1.495.707a3.852 3.852 0 0 1-1.425 2.096c-.725.518-1.613.8-2.5.777a4.88 4.88 0 0 1-1.917-.377 3.955 3.955 0 0 1-1.496-1.13 5.282 5.282 0 0 1-.911-1.625 6.507 6.507 0 0 1 0-4.003c.187-.588.49-1.154.911-1.625a3.954 3.954 0 0 1 1.496-1.13 4.493 4.493 0 0 1 1.916-.376 4.055 4.055 0 0 1 2.477.753c.678.518 1.192 1.224 1.402 2.072l-1.448.73a2.949 2.949 0 0 0-.865-1.554 2.274 2.274 0 0 0-1.566-.542c-.818.024-1.612.377-2.126 1.036ZM8.32 20.34l7.128-9.7h-4.09l-.934-1.413h7.734l-5.795 8.194 10.656-1.79c.023 0 .07.024.07.047 0 .024 0 .047-.023.071L8.32 20.34Z"></path>
      <path d="M14.301 28.91C6.426 28.91 0 22.459 0 14.5 0 6.542 6.403.09 14.301.09c7.876 0 14.302 6.452 14.302 14.41 0 7.959-6.403 14.41-14.302 14.41Zm0-27.266c-7.057 0-12.782 5.769-12.782 12.88 0 7.11 5.725 12.88 12.782 12.88 7.058 0 12.783-5.77 12.783-12.88 0-7.111-5.725-12.88-12.783-12.88Z"></path>
    </svg>
  );
};


export const SecMenu = styled.div`
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
  gap: clamp(2.7rem, 3.33vw, 3.75rem);
  align-items: center;
  @media (min-width: 640px) {
    display: flex;
  }

  & a {
    font-size: clamp(0.79rem, 0.97vw, 1.09rem);
    position: relative;
    display: inline-block;
    padding-bottom: 0.5rem;
    color: inherit;
    text-decoration: inherit;
  }
`;


export const MenuRight = styled.div`
  gap: 1rem;
  align-items: center;
  display: flex;

  & a {
    font-size: 0.75rem;
    --tw-border-opacity: 1;
    border-color: rgb(232 232 233 / var(--tw-border-opacity));
    --tw-bg-opacity: 1;
    background-color: rgb(232 232 233 / var(--tw-bg-opacity));
    --tw-text-opacity: 1;
    color: rgb(34 34 34 / var(--tw-text-opacity));
    isolation: isolate;
    display: inline-flex;
    align-items: center;
    --tw-bg-opacity: 1;
    padding-left: 1rem;
    padding-right: 3rem;
    --tw-text-opacity: 1;
    @media (min-width: 768px) {
      display: inline-flex;
    }
    position: relative;
    height: 2.75rem;
    overflow: hidden;
    border-radius: 6.25rem;
    border-width: 1px;
    --tw-border-opacity: 1;
    border-color: rgb(34 34 34 / var(--tw-border-opacity));
    background-color: rgb(34 34 34 / var(--tw-bg-opacity));
    text-align: left;
    font-size: 0.875rem;
    color: rgb(255 255 255 / var(--tw-text-opacity));
    transition-property: color, background-color, border-color,
      text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 0.3s;

    & span {
      media (min-width: 640px) {
        white-space: nowrap;
        align-items: center;
        flex: 1 1 0%;
        display: flex;
      }
    }
  }
`;


export const SmoothContent = styled.div`
  min-height: 100vh;
  position:relative;
  & div {
    min-height: 100vh;
  }
`;

export const MediaWrapper = styled.div`
  --tw-bg-opacity: 1;
  background-color: rgb(34 34 34 / var(--tw-bg-opacity));
  width:100%;
  height:100%;
  position:absolute;
  top:0;
  left:0;
`;

export const VideoWrapper = styled.div`
  object-fit: cover;
  max-width: 100%;
  width: 100%;
  height:100%;
`;
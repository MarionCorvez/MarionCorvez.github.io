import { SVGProps } from "react";
import { Adobe } from "./adobe";
import { Css } from "./css";
import { Figma } from "@/app/lib/icons/figma";
import { Git } from "./git";
import { Github } from "./github";
import { Html } from "./html";
import { Javascript } from "./javascript";
import { Next } from "@/app/lib/icons/next";
import { Notion } from "@/app/lib/icons/notion";
import { React } from "./react";
import { Redux } from "./redux";
import { Sass } from "./sass";
import { Slack } from "./slack";
import { Squarespace } from "./squarespace";
import { Swagger } from "./swagger";
import { Typescript } from "./typescript";
import { Vite } from "./vite";
import { Wordpress } from "./wordpress";

const ICONS: { [key: string]: any } = {
  "Adobe XD": Adobe,
  "CSS Modules": Css,
  Figma: Figma,
  Git: Git,
  GitHub: Github,
  HTML5: Html,
  JavaScript: Javascript,
  "Next.js": Next,
  Notion: Notion,
  React: React,
  Redux: Redux,
  Sass: Sass,
  Slack: Slack,
  Squarespace: Squarespace,
  Swagger: Swagger,
  TypeScript: Typescript,
  Vite: Vite,
  WordPress: Wordpress,
};

type Props = {
  name: keyof typeof ICONS;
  size?: 16 | 24 | 32 | 48;
} & SVGProps<SVGSVGElement>;

export const Icon = ({ name, size = 32, ...rest }: Props) => {
  const Component = ICONS[name];
  return <Component height={size} width={size} {...rest} />;
};

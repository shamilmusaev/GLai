import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Bounded from "@/components/Bounded";

/**
 * Props for `About`.
 */
export type AboutProps = SliceComponentProps<Content.AboutSlice>;

/**
 * Функция для извлечения текста из Rich Text поля.
 */
function extractTextFromRichText(field: any): string {
  return field.reduce((acc: string, item: any) => {
    if (item.type === "paragraph") {
      return acc + item.text + " ";
    }
    return acc;
  }, "");
}

/**
 * Component for "About" Slices.
 */
const About = ({ slice }: AboutProps): JSX.Element => {
  // Извлечение и разделение текста
  const textContent = extractTextFromRichText(slice.primary.paragraph1);
  const textContent2 = extractTextFromRichText(slice.primary.paragraph2);
  const textContent3 = extractTextFromRichText(slice.primary.paragraph3);
  const textContent4 = extractTextFromRichText(slice.primary.paragraph4);
  const splitText = textContent.split(" "); 
  const splitText2 = textContent2.split(" "); 
  const splitText3 = textContent3.split(" "); 
  const splitText4 = textContent4.split(" "); 

  return (
    <section
      className="mt-30 space-y-6"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="text-4xl font-medium leading-normal tracking-wide">
        <p className="flex flex-wrap">
          {splitText.map((word, index) => (
            <span className="reveal-text mr-3 text-gray-200" key={index}>
              {word}{" "}
            </span> // Рендер каждого слова отдельно
          ))}
        </p>
        <br />
        <p className="flex flex-wrap">
          {splitText2.map((word, index) => (
            <span className="reveal-text mr-3 text-gray-200" key={index}>
              {word}{" "}
            </span> // Рендер каждого слова отдельно
          ))}
        </p>
        <br />
        <p className="flex flex-wrap">
          {splitText3.map((word, index) => (
            <span className="reveal-text mr-3 text-gray-200" key={index}>
              {word}{" "}
            </span> // Рендер каждого слова отдельно
          ))}
        </p>
        <br />
        <p className="flex flex-wrap">
          {splitText4.map((word, index) => (
            <span className="reveal-text mr-3 text-gray-200" key={index}>
              {word}{" "}
            </span> // Рендер каждого слова отдельно
          ))}
        </p>
      </div>
    </section>
  );
};

export default About;

import { Picture, Source } from "apps/website/components/Picture.tsx";
//import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";
import Icon from "../../components/ui/Icon.tsx";

import Exploring from "./Exploring.tsx";
import Footer from "../../sections/Rolex/BackToTopRolex.tsx";

/**
 * @titleBy title
 */

export interface Post {
  /** @title desktop otimized image */
  desktop?: ImageWidget;
  /** @title mobile otimized image */
  mobile?: ImageWidget;
  /** @title Image's alt text */
  alt?: string;
  /**
   * @title Link
   */
  href?: string;
  /** @title Titulo */
  title?: string;
  /** @title Horário */
  clock?: string;
  /** @title Texto */
  text?: string;
}

export interface Props {
  posts?: Post[];
}

function WorldOfRolex({ posts }: Props) {
  return (
    <>
      <div class="w-full">
        <Picture preload={true}>
          <Source
            media="(max-width: 767px)"
            fetchPriority="auto"
            src="https://deco-sites-assets.s3.sa-east-1.amazonaws.com/dryzunstore/b663f25e-6d0d-45e6-93f9-4ecc10f3b999/world-of-rolex-cover-wim23ac_17669-portrait.jpg"
            width={780}
            height={520}
          />
          <Source
            media="(min-width: 768px)"
            fetchPriority="auto"
            src="https://deco-sites-assets.s3.sa-east-1.amazonaws.com/dryzunstore/deffba77-2728-4d06-964c-770d0647a0c5/world-of-rolex-cover-wim23ac_17669-landscape.jpg"
            width={2880}
            height={750}
          />
          <img
            class="object-cover w-full h-full"
            loading="lazy"
            src="https://deco-sites-assets.s3.sa-east-1.amazonaws.com/dryzunstore/deffba77-2728-4d06-964c-770d0647a0c5/world-of-rolex-cover-wim23ac_17669-landscape.jpg"
            alt="o mundo Rolex - Dryzun"
          />
        </Picture>
      </div>

      <section class="pt-[60px] md:pt-[90px] rolex-container gap-8 flex max-md:flex-col justify-between items-start bg-rolex-3">
        <h1 class="w-full md:w-[45%] headline50 text-[#452c1e]">
          O mundo Rolex
        </h1>
        <p class="w-full md:w-[48%] md:pr-[8%] body20-ligth text-[#212121]">
          <b>
            Por quase um século, a Rolex desenvolveu parcerias com um variado e
            extraordinário leque de talentos de inúmeras disciplinas.
          </b>
          A marca está associada à exploração, aos esportes de elite e às artes,
          bem como a diversos e eventos e organizações.
        </p>
      </section>

      <section class="bg-rolex-3 py-[60px] md:py-[90px]">
        <div class="rolex-container">
          <div class="flex flex-wrap justify-start gap-[60px_5px] md:gap-[100px_8px]">
            {posts &&
              posts?.map((post: Post, index: number) => (
                <a
                  key={index}
                  class={`w-full ${
                    index === 0 ? "w-full" : "md:w-[49%]"
                  } h-full block`}
                  href={post?.href}
                >
                  <div class="overflow-hidden">                   
                      <img
                        class="hidden md:block w-full h-auto hover:scale-110 duration-[850ms]"
                        loading="lazy"
                        src={post?.desktop}
                        alt={post?.alt}
                      />
                       <img
                        class="md:hidden w-full h-auto hover:scale-110 duration-[850ms]"
                        loading="lazy"
                        src={post?.mobile}
                        alt={post?.alt}
                      />
                  </div>
                  <div class={`w-full ${index === 0 && "md:w-[49%] md:pr-8"}`}>
                    <p class="fixed16 text-[#452c1e] mt-3">
                      {post?.clock}
                    </p>
                    <h3 class="headline36 text-[#452c1e]">{post?.title}</h3>
                    <p class="w-full body20-ligth text-[#212121]">
                      {post?.text}
                    </p>
                    <span class="secondary-cta justify-start">
                      Saiba mais
                      <Icon
                        class=""
                        size={22}
                        id="ChevronRight"
                        strokeWidth={3}
                      />
                    </span>
                  </div>
                </a>
              ))}
          </div>
        </div>
      </section>

      {/* <Exploring />
      <Footer /> */}
    </>
  );
}

export default WorldOfRolex;

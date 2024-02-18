import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="z-10 flex-1 flex-col items-center justify-center text-center w-full max-w-5xl font-mono text-sm lg:flexrelative flex place-items-center before:absolute before:h-[500px] before:w-full sm:before:w-[490px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[250px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
        <h1 className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] text-8xl font-serif">
          Hello world!
        </h1>
        <p className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] text-xl font-serif leading-10">
          Built by Lucie Ye, for ITMD544 setup lab
        </p>
      </div>

      <div className="grid gap-2 mb-32 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left ">
        <a
          href="https://github.com/yelucie/ITMD544"
          className="px-5 py-4 transition-colors border border-transparent border-gray-100 rounded-lg group dark:border-neutral-800 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-600 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Code{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 lg:max-w-[30ch] text-sm opacity-50`}>
            Check out the code for this lab.
          </p>
        </a>

        <a
          href="https://github.com/yelucie"
          className="px-5 py-4 transition-colors border border-transparent border-gray-100 rounded-lg group dark:border-neutral-800 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            GitHub{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 lg:max-w-[30ch] text-sm opacity-50`}>
            Take a look at my other projects!
          </p>
        </a>

        <a
          href="https://www.linkedin.com/in/LucieYe"
          className="px-5 py-4 transition-colors border border-transparent border-gray-100 rounded-lg group dark:border-neutral-800 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            LinkedIn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 lg:max-w-[30ch] text-sm opacity-50`}>
            Let&apos;s connect on LinkedIn.
          </p>
        </a>

        <a
          href="mailto:lye10hawk.iit.edu"
          className="px-5 py-4 transition-colors border border-transparent border-gray-100 rounded-lg group dark:border-neutral-800 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Email{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 lg:max-w-[30ch] text-sm opacity-50 text-balance`}>
            Send me an email.
          </p>
        </a>
      </div>
    </main>
  );
}

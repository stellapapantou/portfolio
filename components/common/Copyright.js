import Link from "next/link";

const Copyright = () => {
  return (
    <div className="container mx-auto grid lg:grid-cols-12 grid-cols-1 xl:gap-8 relative flex flex-col flex-auto">
        <div className="lg:col-span-6">
            <p className="text-body-xs tracking-wide font-semibold uppercase text-center lg:text-left text-neutral-600 dark:text-white">Thanks for stopping by!</p>
            <p className="text-body-xs text-center lg:text-left text-neutral-600 dark:text-white my-1">This site uses <Link href="https://vercel.com/docs/analytics/privacy-policy" target="_blank" className="transition-all duration-300 no-underline hover:underline
">Vercel Analytics</Link></p>
        </div>
        <div className="lg:col-span-6">
            <p className="text-body-xs tracking-wide font-semibold uppercase text-center lg:text-right text-neutral-600 dark:text-white">© Stella Papantou {(new Date().getFullYear())} : All Rights Reserved</p>
        </div>
    </div>
  );
};

export default Copyright;

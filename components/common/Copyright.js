const Copyright = () => {
  return (
    <div className="container mx-auto grid lg:grid-cols-12 grid-cols-1 xl:gap-8 relative flex flex-col flex-auto">
        <div className="lg:col-span-6">
            <p className="text-body-xs tracking-wide font-semibold uppercase text-neutral-600 dark:text-white">Thanks for stopping by!</p>
        </div>
        <div className="lg:col-span-6">
            <p className="text-body-xs tracking-wide font-semibold uppercase text-right text-neutral-600 dark:text-white">© Stella Papantou {(new Date().getFullYear())} : All Rights Reserved</p>
        </div>
    </div>
  );
};

export default Copyright;
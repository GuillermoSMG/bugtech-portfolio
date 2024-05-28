import React from 'react';
import { HomeTitle } from './components/HomeTitle';
import { HomeTitleSpan } from './components/HomeTitleSpan';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation("home");

  return (
    <section
      className='pt-32 lg:pt-36 px-4 md:px-6 w-full md:w-[75vw] mx-auto mb-6 pb-12'
      id='home'
    >
      <div className='mx-auto text-center pb-10'>
        <HomeTitle
          text={[
            {
              content: t("home-title.0.text-title"),
              style: 'dark:text-mainText text-linkText',
            },
            {
              content: t("home-title.1.text-title"),
              style: 'dark:text-white text-actionText',
            },
          ]}
        />
        <div className='mx-auto'>
          <p
            data-testid='homeSubtitle'
            className='text-infoText dark:text-infoTextDark text-xl md:max-w-[75%] md:text-[23px] mx-auto'
          >
            {t("home-descrip.0.descrip")} <HomeTitleSpan text={t("company-name")} style='font-semibold' />
            {t("home-descrip.1.descrip")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;

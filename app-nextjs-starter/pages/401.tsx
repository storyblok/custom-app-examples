import {NextPage} from "next";
import {useEffect} from "react";

import {Layout} from '@src/components/Layout'

const Page: NextPage = () => {
  useEffect(() => {
    if (typeof window !== "undefined" && window.top === window.self) {
      window.location.assign("https://app.storyblok.com/oauth/app_redirect");
    }
  }, []);

  return (
    <Layout>
      Failed to authenticate
    </Layout>
  );
}

export default Page
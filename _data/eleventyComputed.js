import path from "path";
import fs from "fs";
import { load as yamlLoad } from "js-yaml";

const cache = {
  site: null,
  product: {},
};

export default {
  product: (data) => {
    const productSlug = data?.page?.filePathStem?.split("/")[1];
    if (!productSlug) {
      return undefined;
    }

    if (cache.product[productSlug]) {
      return cache.product[productSlug];
    }

    if (!cache.site) {
      cache.site = yamlLoad(
        fs.readFileSync(
          path.resolve(data.eleventy.env.root, "config.yml"),
          "utf8"
        )
      );
    }

    cache.product[productSlug] = {
      slug: productSlug,
      ...cache.site["products"][productSlug],
    };
    return cache.product[productSlug];
  },
};

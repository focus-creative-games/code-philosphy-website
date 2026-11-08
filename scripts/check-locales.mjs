import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const pages = [
  "/",
  "/hybridclr/",
  "/luban/",
  "/leanclr/",
  "/obfuz/",
  "/zlua/",
  "/zents/",
  "/business/",
  "/bussiness/",
  "/luatier/",
];
let count = 0;
for (const locale of ["zh", "en"])
  for (const page of pages) {
    const route = (locale === "en" ? "/en" : "") + page;
    const html = fs.readFileSync(
      path.join("dist", route, "index.html"),
      "utf8",
    );
    const body = html.split("<body>")[1];
    assert.ok(body?.includes("<h1"), `${route}: missing prerendered content`);
    assert.ok(
      html.includes(`lang="${locale === "en" ? "en" : "zh-Hans"}"`),
      `${route}: incorrect document language`,
    );
    assert.ok(
      html.includes('hreflang="en"') && html.includes('hreflang="zh-Hans"'),
      `${route}: missing alternate language links`,
    );
    const title = html.match(/<title>(.*?)<\/title>/s)?.[1];
    assert.ok(title, `${route}: missing title`);
    if (locale === "en") {
      const text = body.replace(/<[^>]*>/g, "").replace(/中文/g, "");
      assert.ok(
        !/[\u3400-\u9fff]/.test(text),
        `${route}: untranslated Chinese text`,
      );
      assert.ok(!/[\u3400-\u9fff]/.test(title), `${route}: untranslated title`);
      const description = html.match(
        /name="description"\s+content="([^"]*)"/,
      )?.[1];
      assert.ok(
        description && !/[\u3400-\u9fff]/.test(description),
        `${route}: untranslated description`,
      );
      assert.ok(
        html.includes('content="en_US"'),
        `${route}: incorrect Open Graph locale`,
      );
      for (const anchor of body.matchAll(/<a\s[^>]*>/g)) {
        const href = anchor[0].match(/href="([^"]*)"/)?.[1];
        if (
          href?.startsWith("/") &&
          !anchor[0].includes('class="language-switch"')
        )
          assert.ok(
            href.startsWith("/en/"),
            `${route}: navigation leaves English site: ${href}`,
          );
      }
    }
    for (const match of html.matchAll(/(?:href|src)="(\/[^"#?]*)/g)) {
      const localPath = path.join("dist", decodeURIComponent(match[1]));
      assert.ok(
        fs.existsSync(localPath),
        `${route}: missing local target ${match[1]}`,
      );
    }
    count++;
  }
console.log(
  `Verified ${count} bilingual static pages: content, language, metadata, navigation and local targets.`,
);

// Fastify is a web framework highly focused on providing the best developer experience 
// with the least overhead and a powerful plugin architecture. 
// It is inspired by Hapi and Express and as far as we know, 
// it is one of the fastest web frameworks in town.

// first write script generate certs in package.json in order to use OpenSSL and enable HTTP/2
// HTTP/2 = plus rapide car 1 seule connexion TCP, plus securisé aussi, adopté par Chrom depuis 2015
// then run npm generate-certs

// -----------------------------------------------------
// Fastify Server Configuration
// -----------------------------------------------------

const port = parseInt(process.env.PORT, 10) || 4000;
const dev = process.env.NODE_ENV !== "production";
const conf = require('./next.config')();
const fastify = require('fastify')({
  "http/2": true,
  https: {
    key: fastify.readFileSync(path.join(__dirname, "certs/privateKey.key")),
    cert: fastify.readFileSync(path.join(_dirname, "certs/certificate.crt"))
  }
});

// -----------------------------------------------------
// Next routes & rendering configuration
// -----------------------------------------------------

const nextI18NextMiddleware = require('next-i18next/middleware').default;
const nextI18Next = require('./i18n');

const initNext = async () => {

  //configure next-i18next middleware in our fastufy server
  fastify.register((instance, opts, next) => {
    instance.use(nextI18NextMiddleware(nextI18Next));
    next();
  });

  // start and configure next.js with fastify
  fastify
    .register(require('fastify-nextjs'), { dev, conf })
    .after(() => {
      fastify.next('/');
      fastify.next('/about');
    });

  // configure static serving for assets
  fastify.register((instance, opts, next) => {
    instance.register(require('fastify-static'), {
      root: path.join(_dirname, "public"),
      prefix: '/'
    });
    next();
  })
};

// -----------------------------------------------------
// Fastify server startup
// -----------------------------------------------------

(async function () {
  await initNext();
  await fastify.listen(port, err => {
    if (err) throw err;
    console.log(`server listening on http://localhost:${port}`);
  })
})();
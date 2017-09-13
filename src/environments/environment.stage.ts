// ng build --environment=stage
// ng build --prod --env=stage  (minified)

export const environment = {
  version: 'v1.0',
	envName: 'stage',
  production: true,
  debug: false,
  // protocol: 'http://',
  // subDomain: 'www',
  // subDomainDelimiter: '.',
  // host: 'xxx.com',
  // baseUrl: '/',
  // apiUrl: 'http://example.com/api/',
  restUrl: 'https://my-node-rest.herokuapp.com/',
  imageUrl: '/assets/images/',
};

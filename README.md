Issue description:

Forms in the routes containing a hash tag (encoded) submit with error.

* npm run dev
* `/` route
* Click `#routeWithHashTag`
  * Try to Submit (should not fail, **but fails**)
* Click `routeWithoutHashTag`
  * Try to Submit (should not fail)
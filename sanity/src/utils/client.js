import sanityClient from "@sanity/client";

const options = {
    projectId: process.env.REACT_APP_SANITY,
    dataset: process.env.REACT_APP_PROD,
};

const client = sanityClient({
    ...options,
    useCdn: process.env.NODE_ENV === "production"
});

export default client;
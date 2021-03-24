import client from "./client";


/*potensielt feil i actor her, pila? */
const movieFields =  `title, ingress, "actor": actor->name, imageUrl, videoUrl
`;

export const getMovies = async () => {
    const data = await client.fetch(`*[_type == "movie"]{${movieFields}, body[]{...}}`);
    return data;
}
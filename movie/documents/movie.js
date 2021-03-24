const movie = {
    title: "movie",
    name: "movie",
    type :"document",
    fields: [
        {
            name: "title",
            type: "string",
            title: "Tittel",
            description: "Dette er filmtittelen",
        },
        {
            name: "ingress",
            type: "text",
            title: "Ingress",
            description: "Info om filmen",
        },
        {
            name: "body",
            type: "content",
            title: "innhold",
        },
        {
            title: "actor",
            name: "actor",
            type: "reference",
            to: [{type: "actor"}]
        },
        {
            title: 'Image URL',
            name: 'imageUrl',
            type: 'url'
          },
          {
            title: 'Video URL',
            name: 'videoUrl',
            type: 'url'
          }

    ]
}

export default movie;
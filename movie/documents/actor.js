const actor = {
    title: "actor",
    name: "actor",
    type: "document",
    fields: [
        {
            name: "name",
            type: "string",
            title: "Skuespiller",
            description: "Dette er navnet på hovedrolleinnehaveren i filmen",
            validation: (Rule) => Rule.required(),
        },
    ]
}

export default actor;
import BlockContent from "@sanity/block-content-to-react";

const SanityContent = ({ data }) => <BlockContent blocks={data || []} />


export default SanityContent;
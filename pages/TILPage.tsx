import React from 'react';
import {Client} from "@notionhq/client";
import {QueryDatabaseResponse} from "@notionhq/client/build/src/api-endpoints";

function TilPage(props: {
  data: QueryDatabaseResponse
}) {
  const data = props.data;
  console.log(data)
  return (
    <div>{JSON.stringify(data)}</div>
  );
}

export const getStaticProps = async () => {
  const notion = new Client({
    auth: process.env.NOTION_TOKEN,
  });

  const data = await notion.databases.query({
    database_id: process.env.DATABASE_ID as string
  });

  return {
    props: {
      data
    }
  }
}

export default TilPage;
/** @format */
"use client";
import { Card, CardHeader, CardBody, Image, Button } from "@nextui-org/react";



export default function NewsItems({
  title,
  image,
  description,
  publishedAt,
  url
}: {
  title: string;
  image: string;
  description: string;
  publishedAt:string;
  url:string
}) {
  return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">{title}</p>
        <small className="text-default-500">{publishedAt}</small>
        {/* <h4 className="font-bold text-large">{description}</h4> */}
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
         
          alt="Card background"
          className="object-cover rounded-xl my-4"
          src={image}
          width={270}
        />
        <Button href={url} target="_blank" >see more </Button>
      </CardBody>
    </Card>
  );
}

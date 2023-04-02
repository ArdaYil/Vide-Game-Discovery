import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

export default function GameCardSkeleton() {
  return (
    <Card>
      <Skeleton
        height="200px"
        width="300px"
        borderRadius="10px"
        overflow="hidden"
      />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
}

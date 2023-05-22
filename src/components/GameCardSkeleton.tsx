import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

export default function GameCardSkeleton() {
  return (
    <Card>
      <Skeleton
        height="auto"
        width="100%"
        borderRadius="10px"
        overflow="hidden"
      />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
}

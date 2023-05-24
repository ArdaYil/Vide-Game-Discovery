import {
  Card,
  CardBody,
  Skeleton,
  SkeletonText,
  AspectRatio,
} from "@chakra-ui/react";

export default function GameCardSkeleton() {
  return (
    <AspectRatio ratio={1}>
      <Card display="flex" flexDirection="column">
        <Skeleton
          height="60%"
          width="100%"
          borderRadius="10px"
          backgroundColor="gray.700"
        />
        <CardBody width="100%">
          <SkeletonText />
        </CardBody>
      </Card>
    </AspectRatio>
  );
}

import { Box, Heading, Text } from "@chakra-ui/react";

export function Header() {
	return (
		<Box pb="18" as="section">
			<Box pt="70px" pb="80px" px="8" textAlign={["left", "left", "center"]}>
				<Heading fontWeight="bold" fontSize={["2xl", "2xl", "3xl"]} pb="1em">
					Where ara you located?
				</Heading>
				<Text fontWeight="medium" letterSpacing="sm" fontSize={["lg", "lg", "xl"]} pt="2">
					So we know where to drop off the stuff
				</Text>
				<Text
					fontWeight="400"
					fontSize={["sm", "sm", "md"]}
					color="gray.400"
					pt="3"
					maxW="15em"
					mx="auto"
				>
					We won't share your address with your ex (or wherever).
				</Text>
			</Box>
		</Box>
	);
}

import { Input, InputGroup, InputLeftElement, Stack } from "@chakra-ui/react";

import mappinIcon from "./../../assets/icons/map-pin.png";

export function Search() {
	return (
		<Stack maxW="600px" margin="auto">
			<InputGroup
				size="lg"
				borderRadius="0"
				_placeholder={{ color: "black", bg: "white" }}
				fontSize="md"
				boxShadow="base"
			>
				<InputLeftElement pointerEvents="none">
					<img
						src={mappinIcon}
						alt="map pin icon"
						style={{ height: "15px", width: "15px", display: "block", margin: "0 auto" }}
					/>
				</InputLeftElement>
				<Input
					htmlSize={5}
					placeholder="Enter zipcode"
					_placeholder={{ color: "black", bg: "white" }}
					size="lg"
					borderRadius="0"
					paddingX="4"
					paddingY="4"
				/>
			</InputGroup>
		</Stack>
	);
}
import { Input, InputGroup, InputLeftElement, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import zipcodesJSON from "./../../assets/data/zipcodes.json";
import mappinIcon from "./../../assets/icons/map-pin.png";

interface Zipcode {
	code: string;
}
interface Zipcodes {
	zipcodes: Zipcode[];
}

export function Search() {
	// zipcodes = zipcodesJSON.zipcodes;
	// const [zipcodesState: Zipcodes, setZipcodesState] = useState<Zipcodes>({zipcodes: []});
	const [zipcodesState, setZipcodesState] = useState<Zipcodes>({ zipcodes: [] });

	useEffect(() => {
		setZipcodesState({ zipcodes: zipcodesJSON.zipcodes });
	}, []);

	function checkZipcode(zip: string): boolean {
		return zipcodesState.zipcodes.some((z: Zipcode) => z.code === zip);
	}

	checkZipcode("12345");

	return (
		<Stack maxW="600px" margin="auto">
			<InputGroup
				size="lg"
				borderRadius="0"
				_placeholder={{ color: "black", bg: "white" }}
				fontSize="md"
				boxShadow="base"
				bg="white"
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
					// paddingX="4"
					px={4}
					// paddingY="4"
					py={4}
				/>
			</InputGroup>
		</Stack>
	);
}

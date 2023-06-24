import { Box, Flex, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import { useState } from "react";

import mapPinGray from "./../../assets/icons/map-pin-gray.png";

interface Location {
	id: number;
	direction: string;
	city: string;
}

interface AutocompleteResultsProps {
	results: Location[]; // Lista de resultados a mostrar
	onItemClick: (item: string) => void; // Función a ejecutar cuando se hace clic en un item
}
export function AutocompleteResults({
	results,
}: // onItemClick,
AutocompleteResultsProps): JSX.Element {
	const [filter, setFilter] = useState("");
	results = [
		{ id: 1, direction: "875 Bordeaux Way", city: "Napa, CA, USA" },
		{ id: 2, direction: "Alcalde Pedro Alarcon 875", city: "San Migue, Chile" },
		{ id: 3, direction: "875 South Bundy Drive", city: "Los Angeles, CA, USA" },
	];

	// const filteredResults = results.filter(function (result) {
	// 	return result.toLowerCase().includes(filter.toLowerCase());
	// });
	// const items = results.map((item) => <ListItem>{item.name}</ListItem>);

	return (
		<Box maxW="600px" margin="auto" borderWidth={1} borderRadius="0" bg="white">
			<UnorderedList maxW="600px" margin="auto" bg="white" styleType="none">
				{results.map((result) => (
					<ListItem key={result.id} boxShadow="sm" px={1} py={5}>
						<Flex alignItems={"center"}>
							<Box mr={2} px={2.5}>
								<img
									src={mapPinGray}
									alt="map pin icon gray"
									style={{ height: "15px", width: "15px", display: "block", margin: "0 auto" }}
								/>
							</Box>
							<Box display={"flex"} flexDirection={"column"} alignItems={"flex-start"}>
								<Text fontWeight="bold">{result.direction}</Text>
								<Text fontSize="sm" color="gray.500">
									{result.city}
								</Text>
							</Box>
						</Flex>
					</ListItem>
				))}
			</UnorderedList>
		</Box>
	);
}

import { Box, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";

// interface Location {
// 	id: number;
// 	name: string;
// }

interface AutocompleteResultsProps {
	results: string[]; // Lista de resultados a mostrar
	onItemClick: (item: string) => void; // Función a ejecutar cuando se hace clic en un item
}
export function AutocompleteResults({
	results,
}: // onItemClick,
AutocompleteResultsProps): JSX.Element {
	const [filter, setFilter] = useState("");
	results = ["LOCATION 1", "LOCATION 3", "LOCATION 4"];

	const filteredResults = results.filter(function (result) {
		return result.toLowerCase().includes(filter.toLowerCase());
	});

	return (
		<Box mt={2} p={2} borderWidth={1} borderRadius="md">
			{results.map((result) => (
				<Flex key={result.id} alignItems="center">
					<Box mr={2}>
						<FaSearch />
					</Box>
					<Box>
						<Text fontWeight="bold">{result.title}</Text>
						<Text fontSize="sm" color="gray.500">
							{result.description}
						</Text>
					</Box>
				</Flex>
			))}
		</Box>
		// <Box maxW="600px" margin="auto">
		// 	{filter && filteredResults.length === 0 && (
		// 		<Box p={2} bg="red.100">
		// 			<Text>No hay resultados</Text>
		// 		</Box>
		// 	)}
		// 	<List
		// 		maxW="600px"
		// 		margin="auto"
		// 		bg="white"
		// 		borderRadius="0"
		// 		// border={"1px solid rgba(0,0,0,0.1)"}
		// 	>
		// 		{filteredResults.map(function (result) {
		// 			return (
		// 				<ListItem
		//           display:"flex"
		//           flex-direction="row"
		// 					padding={3}
		// 					// px={4}
		// 					borderBottom="1px solid rgba(0,0,0,0.01)"
		// 					key={result}
		// 					boxShadow="base"
		// 					size="lg"
		// 					fontSize="md"
		// 				>
		// 					<ListIcon as={mappinIconGray} color="green.500" />
		// 					<Box display="flex" alignItems="left">
		// 						<Image src="/mi-imagen.png" w={10} h={10} mr={3} />
		// 						<Box
		// 							display="inline-flex"
		// 							alignItems="center"
		// 							_placeholder={{ color: "black", bg: "white" }}
		// 						>
		// 							<Text fontWeight="bold">{result}</Text>
		// 							<Text fontSize="sm" color="gray.500">
		// 								{result}
		// 							</Text>
		// 						</Box>
		// 					</Box>
		// 				</ListItem>
		// 			);
		// 		})}
		// 	</List>
		// </Box>
	);
}

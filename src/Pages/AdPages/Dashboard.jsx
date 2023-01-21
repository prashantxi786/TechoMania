import "../..//style/Ad_Dashboard.css";
import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import {
  BsFillBagCheckFill,
  BsCurrencyDollar,
  BsFillPeopleFill,
  BsFillStarFill,
} from "react-icons/bs";
import { AiOutlineNumber, AiOutlineFall, AiOutlineRise } from "react-icons/ai";
import { FiArrowUpRight } from "react-icons/fi";
import Graph_BarChart from "../../Components/Admin/AdComponents/Graph_BarChart";
import Graph_PieChart from "../../Components/Admin/AdComponents/Graph_PieChart";
import Graph_PieChartEXT from "../../Components/Admin/AdComponents/Graph_PieChartEXT";

const Dashboard = () => {
  return (
    <Box className="Ad_Dashboard_Container">
      <Box>
        <VStack alignItems="right">
          <HStack>
            <BsFillBagCheckFill />
            <Text>Total sales</Text>
          </HStack>
          <VStack alignItems="right">
            <HStack>
              <BsCurrencyDollar />
              <Text>{`87654`}</Text>
            </HStack>
            <HStack>
              <AiOutlineRise color="green" />
              <AiOutlineFall color="red" />
              <Text>35%</Text>
              <Text>Last Update</Text>
            </HStack>
          </VStack>
        </VStack>

        <VStack alignItems="right">
          <HStack>
            <BsFillPeopleFill />
            <Text>Visitors</Text>
          </HStack>
          <VStack alignItems="right">
            <HStack>
              <AiOutlineNumber />
              <Text>{`87654`}</Text>
            </HStack>
            <HStack>
              <AiOutlineRise color="green" />
              <AiOutlineFall color="red" />
              <Text>35%</Text>
              <Text>Last Update</Text>
            </HStack>
          </VStack>
        </VStack>

        <VStack alignItems="right">
          <HStack>
            <BsFillStarFill />
            <Text>Total Orders</Text>
          </HStack>
          <VStack alignItems="right">
            <HStack>
              <AiOutlineNumber />
              <Text>{`87654`}</Text>
            </HStack>
          </VStack>
          <HStack>
            <AiOutlineRise color="green" />
            <AiOutlineFall color="red" />
            <Text>35%</Text>
            <Text>Last Update</Text>
          </HStack>
        </VStack>
      </Box>

      <Box>
        <Box>
          <Text>Revenue</Text>
          <Box>
            <Graph_BarChart />
          </Box>
        </Box>
        <Box>
          <Text>Users Status</Text>
          {/* <Box>
            <Graph_PieChart />
          </Box>
          <Box>
            <Graph_PieChartEXT/>
          </Box> */}

          <Box>
            <Box>
              <Graph_PieChart />
            </Box>
            <Box>
              <Graph_PieChartEXT />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;

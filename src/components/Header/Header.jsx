import {
  Box,
  Flex,
  HStack,
  IconButton,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link as GatsbyLink } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

import SearchBar from '../SearchEngine/SearchBar';

const HEADER_HEIGHT = 60;
const HEADER_BORDER_WIDTH = 1;
export const TOTAL_HEADER_HEIGHT = HEADER_HEIGHT + HEADER_BORDER_WIDTH;

function MergifyLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      cursor="pointer"
      width="125px"
      version="1.0"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 870 210"
      color="inherit"
    >
      <text
        stroke="none"
        id="text1"
        x="550px"
        fontFamily="Poppins"
        fill="currentColor"
        letterSpacing="-1(null)"
        y="156.499969px"
        textAnchor="middle"
        fontVariant="normal"
        fontStretch="normal"
        fontSize="140px"
      >
        Mergify
      </text>
      <g
        visibility="visible"
        id="logo"
        stroke="none"
        transform="translate(0.000000,210.000000) scale(0.100000,-0.100000)"
        fill="#53a9db"
      >
        <path
          d="M898,2090 c-229,-37 -425,-136 -588,-300 c-141,-140 -234,-305 -283,-499 c-30,-123 -30,-359 0,-482 c49,-194 142,-359 283,-499 c140,-141 305,-234 499,-283 c123,-30 359,-30 482,0 c194,49 359,142 499,283 c141,140 234,305 283,499 c30,123 30,359 0,482 c-49,194 -142,359 -283,499 c-139,140 -306,235 -494,281 c-93,23 -309,33 -398,19 m-160,-594 c15,-8 35,-23 45,-34 c17,-19 21,-19 65,-5 c57,18 132,11 177,-16 c33,-19 34,-19 96,0 c172,54 294,24 352,-84 c20,-39 22,-57 25,-256 l3,-213 l34,-34 c60,-60 67,-136 18,-202 c-89,-120 -273,-59 -273,92 c0,51 27,109 56,120 c13,5 15,34 12,212 l-3,206 l-28,24 c-32,27 -84,31 -152,11 l-39,-12 l3,-215 c3,-209 3,-214 26,-232 c58,-45 67,-150 18,-209 c-94,-112 -273,-54 -273,88 c0,53 11,83 44,113 l26,25 l0,208 c0,194 -1,208 -20,227 c-20,20 -63,26 -106,14 c-11,-3 -29,-21 -39,-40 c-10,-20 -27,-40 -37,-45 c-16,-9 -18,-26 -18,-190 c0,-149 2,-181 15,-185 c28,-11 55,-69 55,-120 c0,-151 -184,-212 -273,-92 c-49,66 -42,142 18,203 l35,34 l0,161 l0,161 l-35,34 c-77,77 -64,190 29,246 c37,22 106,25 144,5"
          id=""
          visibility="visible"
        />
        <path
          d="M610,1414.5 c-59,-59 -26,-152 54,-152 c48,0 65,8 81,41 c33,62 2,125 -67,136 c-32,5 -41,1 -68,-25"
          visibility="visible"
          id="path1"
        />
        <path
          d="M605,805 c-36,-36 -34,-88 5,-127 c27,-26 36,-30 68,-25 c43,7 82,46 82,83 c0,32 -25,80 -45,88 c-37,14 -86,6 -110,-19"
          visibility="visible"
          id="path1"
        />
        <path
          d="M986,799 c-49,-58 -20,-134 56,-146 c32,-5 41,-1 68,25 c61,61 26,152 -59,152 c-32,0 -44,-6 -65,-31"
          visibility="visible"
          id="path1"
        />
        <path
          d="M1382,823 c-18,-7 -42,-57 -42,-87 c0,-37 39,-76 82,-83 c32,-5 41,-1 68,25 c60,61 26,153 -57,151 c-21,0 -44,-3 -51,-6"
          visibility="visible"
          id="path1"
        />
      </g>
    </svg>
  );
}

export function Header({ children }) {
  const { toggleColorMode, colorMode } = useColorMode();
  const logoColor = useColorModeValue('black', 'white');

  return (
    <Box pos="sticky" top="0" zIndex="2">
      <Flex
        align="center"
        as="header"
        px="4"
        boxSizing="content-box"
        bg="bg"
        css={{
          height: HEADER_HEIGHT,
          borderBottomWidth: HEADER_BORDER_WIDTH,
        }}
      >
        <HStack spacing="4" display={{ base: 'none', md: 'flex' }}>
          <Flex
            as={GatsbyLink}
            to="/"
            align="center"
            display={{ base: 'none', md: 'flex' }}
          >
            <Flex
              ml="1.5"
              px="1.5"
              rounded="sm"
              alignItems="center"
              fontSize="xl"
              whiteSpace="pre"
              color={logoColor}
            >
              <MergifyLogo />| {' Docs'}
            </Flex>
          </Flex>
          {children}
        </HStack>
        <HStack display={{ base: 'flex', md: 'none' }}>{children}</HStack>
        <SearchBar />
        <IconButton
          ml="auto"
          mr="2"
          fontSize="xl"
          variant="ghost"
          onClick={toggleColorMode}
          icon={colorMode === 'dark' ? <FiSun /> : <FiMoon />}
        />
      </Flex>
    </Box>
  );
}

Header.propTypes = {
  children: PropTypes.node,
};

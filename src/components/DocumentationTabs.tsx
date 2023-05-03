'use client'

import React, { FC } from "react";
import { Tabs, TabsList, TabsTrigger } from "./ui/Tabs";
import { TabsContent } from "@radix-ui/react-tabs";
import SimpleBar from 'simplebar-react'
import Code from "@/components/Code";
import { nodejs } from "@/helpers/documentation-code";
import { python } from "@/helpers/documentation-code";

const DocumentationTabs: FC = () => {
  return (
    <Tabs defaultValue="nodejs" className='max-w-2xl w-full '>
      <TabsList>
        <TabsTrigger value="nodejs">NodeJS</TabsTrigger>
        <TabsTrigger value="python">Python</TabsTrigger>
      </TabsList>
      <TabsContent value="nodejs">
        <SimpleBar>
          <Code animated language="javascript" code={nodejs} show />
        </SimpleBar>
      </TabsContent>
      <TabsContent value="python">
        <SimpleBar>
          <Code animated language="python" code={python} show />
        </SimpleBar>
      </TabsContent>
    </Tabs>
  );
};

export default DocumentationTabs;

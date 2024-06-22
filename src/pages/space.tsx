import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle } from "lucide-react";

const SpaceExplorationDashboard = () => {
  const [fuelLevel, setFuelLevel] = useState(75);

  const consumeFuel = () => {
    setFuelLevel((prevLevel) => Math.max(prevLevel - 10, 0));
  };

  return (
    <div className="container mx-auto p-4 space-y-6">
      <h1 className="text-4xl font-bold text-center mb-8">
        Space Exploration Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Mission Status</CardTitle>
          </CardHeader>
          <CardContent>
            <Alert>
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Attention</AlertTitle>
              <AlertDescription>
                Approaching asteroid field. Proceed with caution.
              </AlertDescription>
            </Alert>
          </CardContent>
          <CardFooter>
            <Button onClick={consumeFuel}>Engage Thrusters</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Fuel Levels</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Progress value={fuelLevel} className="w-full" />
            <p className="text-center">{fuelLevel}% Remaining</p>
          </CardContent>
          <CardFooter>
            <Badge variant={fuelLevel > 20 ? "secondary" : "destructive"}>
              {fuelLevel > 20 ? "Sufficient" : "Low Fuel"}
            </Badge>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Communication</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="incoming" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="incoming">Incoming</TabsTrigger>
                <TabsTrigger value="outgoing">Outgoing</TabsTrigger>
              </TabsList>
              <TabsContent value="incoming">
                <p>Last message: "Good luck, explorers!"</p>
              </TabsContent>
              <TabsContent value="outgoing">
                <p>Signal strength: Strong</p>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Mission Progress</CardTitle>
          <CardDescription>Distance traveled over time</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-center text-lg font-semibold">
            Total Distance: 19,550 km
          </p>
          <p className="text-center text-sm text-muted-foreground">
            (Data visualization not available in this view)
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Nearby Celestial Bodies</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2">
            <li>Mars (Red Planet) - Distance: 78.3 million km</li>
            <li>Europa (Jupiter's Moon) - Distance: 628.3 million km</li>
            <li>Andromeda Galaxy - Distance: 2.537 million light-years</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default SpaceExplorationDashboard;

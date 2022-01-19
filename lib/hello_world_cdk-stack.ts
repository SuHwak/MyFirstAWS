import * as cdk from "@aws-cdk/core";
import * as lambda from "@aws-cdk/aws-lambda";

export class HelloWorldCdkLambdaStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

// The code that defines your stack goes here
    const helloWorldFunction = new lambda.Function(this,"HelloWorldFunction", {
      code: lambda.Code.fromAsset("functions/helloworld"),
      handler: "index.handler",
      runtime: lambda.Runtime.NODEJS_12_X,
      description: "This Lambda Function returns the message 'Heloo, World!' in the reponse body",
    });
  }
}
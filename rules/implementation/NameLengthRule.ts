import ScanRule from "../../core/ScanRule.ts";
import Node from "npm:tree-sitter";

export default class NameLengthRule extends ScanRule{
    inspect(whatToScan: Array<Node>,...args: any[]){
        // TODO: Varargs for inspect to support k/v pairs of configurable properties.
        // Approach will be as agnostic as possible to these
        // const violatingNodes: Array<Node> = whatToScan
        //     .filter(scannedNode => 
        //         scannedNode.text != null && 
        //         scannedNode.text.length <= 3 &&
        //         this.RuleConfiguration.parentNodeTypeNames.includes(scannedNode.parent.type)
        //     );
        const violatingNodes: Array<Node> = whatToScan
            .filter(scannedNode => 
                scannedNode.text != null && 
                scannedNode.text.length > 0 &&
                this.RuleConfiguration.parentNodeTypeNames.includes(scannedNode.parent.type)
            );

        violatingNodes.forEach(node=>{
            console.log(node.text);
        })
            
        violatingNodes.forEach(node=>{
            this.addViolation(node);
        });
    }
}
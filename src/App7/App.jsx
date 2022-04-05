import { NodeEditor } from 'flume';
import config from '../../flume.config';

export default function App() {
  return (
    <div style={{ width: 800, height: 600 }}>
      <NodeEditor
        portTypes={config.portTypes}
        nodeTypes={config.nodeTypes}
        defaultNodes={[
          {
            type: 'homepage',
            x: 190,
            y: -150,
          },
        ]}
      />
    </div>
  );
}

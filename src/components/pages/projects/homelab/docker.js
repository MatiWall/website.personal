import CodeBlock from './../../../codeBlock.js'

const DockerPage = () => {
  return (
    <>
      <h1 id='docker'> Docker</h1>
      <p> I use the docker container runtime for my applications </p>
      <h1 id='docker-registry'> Docker Registry</h1>
      <p>
        I wanted a centralized place to store my workload images. Ideally I would have used an image registry service to
        make sure that if hell breaks loose and I have to set change storage or move to a new cluster setup it would still
        only have to run my Ansible workbooks and everything would be setup. Instead I went for a locally hosted registry
        on my cluster due to easy setup and no further cost. Setting up your own private registry is a as easy as creating a deployment
        with <a href="https://hub.docker.com/_/registry">this</a> image.
      </p>
      <p>
        As i use ArgoCD to deploy my workload the kubernetes manifests are of course stored in git and can be found <a href="https://github.com/MatiWall/application-values/tree/master/docker-registry">here</a>.
      </p>
      <p>
       As I am running on an arm64 platform I do the following:<br/>
    <pre>
        <CodeBlock>
        docker buildx build -t personal-website:0.0.2 --platform linux/arm64/v8 .
        </CodeBlock>

         <CodeBlock>
        docker tag personal-website:0.0.2 docker-registry.mw/personal-website:0.0.2
        </CodeBlock>
        Assuming some sort of DNS (entry added to /etc/hosts) the image can be pushed to the registry from within the local network using.
        <CodeBlock>
        docker push docker-registry.mw/personal-website:0.0.2
        </CodeBlock>
    </pre>
      </p>

       <h2 id='docker-registry-ui'> Docker Registry UI</h2>
    </>
  );
};

export default DockerPage;

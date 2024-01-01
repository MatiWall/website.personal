import { Typography } from '@mui/material';

import CodeBlock from './../../../codeBlock.js'

const DockerPage = () => {

  const yamlCode = `
  mirrors:
    docker-registry.mw:
      endpoint:
        - "http://docker-registry.mw"
    `;
  return (
    <>
      <h1 id='docker'> Docker</h1>
      <h2 id='docker-image-build'>Building image</h2>
      <p>
        As my Raspberry Pi uses an Arm64 archiceture I have to build my Docker images for this arciceture. To do this you can use 
        <code>docker buildx</code> which extend the capabilities with BuildKit making it possible to specify the target platform.
        To build my images I use the following commant:<br />
        <CodeBlock>
          docker buildx build -t &lt;image-name&gt;:&lt;tag&gt; --platform linux/arm64/v8 .
        </CodeBlock>
      </p>
      <p>
        As i use ArgoCD to deploy my workload the kubernetes manifests are of course stored in git and can be found
        <a href="https://github.com/MatiWall/application-values/tree/master/docker-registry">here</a>.
        Having a docker registry set up on the Raspberry Pi on my local network
      </p>
      <h2 id='docker-registry'>Registry</h2>
      <section>
      <p>
         Using Kubernetes to run Docker images I need somewhere to store these images. Ideally I would have used an image registry service to
        make sure that if hell breaks loose and I have to change storage or move to a new cluster setup it would still
        only have to run my Ansible workbooks and everything would be setup. Instead I went for a locally hosted registry
        on my cluster due to easy setup and no further cost. Setting up your own private registry is a as easy as creating a deployment
        with <a href="https://hub.docker.com/_/registry">this</a> image. <br/> <br/>
        Running the Docker registry on the cluster I have to expose it to the outside world. As I use the default reverse proxy (traefik) that ships with K3s
        this is done by defining a service and ingress route for my deployment. 
        This can be seen <a href="https://github.com/MatiWall/homelab.application-values/tree/master/docker-registry">here</a>. 
        Having expose the registry deployment under the domain docker-registry.mw I simply have to add this to the "/etc/hosts" 
        file on the machine that push the image (read more <a href="https://tldp.org/LDP/solrhe/Securing-Optimizing-Linux-RH-Edition-v1.3/chap9sec95.html">here</a>). 
      </p>
      <p>
        To push the image first tag is like:
        <CodeBlock>
          docker tag &lt;image-name&gt;:&lt;tag&gt; docker-registry.mw/&lt;image-name&gt;:&lt;tag&gt;
        </CodeBlock>
        and then push it to the registry:
        <CodeBlock>
          docker push docker-registry.mw/&lt;image-name&gt;:&lt;tag&gt;
        </CodeBlock>
        The image is now available on the registry.
      </p>
      </section>
      <p>
        For the cluster itself to be able to pull the images from a non secure registry simply add 
        the following line to the /etc/rancher/k3s/registries.yaml file on the cluster host.
      </p>

      <CodeBlock>
      <Typography variant="body2" component="pre" sx={{ whiteSpace: 'pre-wrap' }}>
   {yamlCode }
      </Typography>
        </CodeBlock>

      

      <h2 id='docker-registry-ui'> Docker Registry UI</h2>
    </>
  );
};

export default DockerPage;

const HomeLab = () => {
  return (
    <>
      <h1 id='description'> What I Try to Achieve </h1>
      <p>
       As mentioned on the homepage in December 2023 I bought a Raspberry Pi to play with over the christmas holidays.
       This evolved to be setting up a home cluster using <a href="https://k3s.io/">K3S</a>, <a href="https://argo-cd.readthedocs.io/en/stable/">ArgoCD </a>,
       <a href="https://ranchermanager.docs.rancher.com/">Rancher Cluster Manager and many more tool</a>.
       Everything is of course versioned controlled using git, stored in GitHub and automated so that the cluster with
       all the tools and applications can be set up with the push of a button.
       </p>
       <p>
       From my professional life I have experience working with Docker, Kubernetes, ArgoCD, Rancher as tools to deploy my
       workloads though as I am an analyst these tools have always been given to me. As I often do smaller coding projest
       or websites at home I decided to set up a home cluster.
       </p>
       <p>
         In the following sections and pages I strive to give a detailed explanation for my Home Lab project.
       </p>

       <h1> Design Goals</h1>
       My main goal is to set up a K3s cluster to run my private workloads. Below is a list of the sub goals inorder to successfully do this:
       <p>
        <ul>
         <li> No manual work done on cluster i.e. everything should me automized </li>
         <li> Avoid external dependence</li>
         <li> <del> Distributed storage to ensure noted can be replaces and pods can start up on random nodes </del> </li>
        </ul>
       </p>
       <h1 id='hardware'> Hardware </h1>
       <p>
       Below is a list of the hardware used to build my Raspberry Pi K3s kubernetes cluster.
       <ul>
          <li>
          Raspberry Pi 5 (8 GB Ram)
          </li>
            <li>
          Official Raspberry Pi 5 USB-C Power Supply 5V 5A
          </li>
          <li>
          Micro SD Card - SanDisk High Endurance Class 10 (128 GB)
          </li>
           <li>
             Official Raspberry Pi 5 Case - Black
          </li>
       </ul>
       I chose to go with a big MicroSD card instead of external storeage to keep cost down in the initial phase. In the future I hope to add more
       Raspberry Pi's and external memory.
        </p>
        <h1> Tools </h1>
        <p>
          I have always been a bit of a perfectionist so obviously I am not just setting up a K3s cluster.
        I want to automate as much as possible as use the same tools at the industry does.
       Below is a list of the tool a have used to setup my home cluster:
       <ul>
          <li> <a href="https://docs.ansible.com/">Ansible </a> </li>
          <li> K3s </li>
          <li> Rancher Cluster Manager </li>
          <li> ArgoCD </li>
          <li> Prometheus </li>
          <li> Grafana </li>
          <li> Postgres </li>
          <li> Elasticsearch (to be implemented)</li>
          <li> OTel Collector (to be implemented)</li>
       </ul>
       There is (or will be) a subpage for each of these tool where I explain in detail how they were implemented.
       </p>
    </>
  );
};

export default HomeLab;

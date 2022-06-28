# Using Docker on Windows 10 Home Edition


I like Linux. And I used it for many years. But now, I need to use some software that does not support Linux. So, I’m using Windows 10 here. And it is a Windows 10 **Home Edition**. Docker does not support it on its official release. So, you need to get the legacy [Docker Toolbox](https://docs.docker.com/toolbox/overview/).

## But, why the native version does not work?

A Docker container should be isolated from all other machine resources not granted by the user. For this, it uses Linux’s namespace and control groups. From [this article](https://www.unixtutorial.org/does-docker-need-hardware-virtualization):

>  **Linux namespaces** are provided and supported by Linux kernel to allow separation (virtualization) of process ID space (PID numbers), network interfaces, interprocess communication (IPC), mount points and kernel information.
**Control groups** in Linux allow accurate resource control: using control groups allows Docker to limit CPU or memory usage for each container.*

To run Docker “natively” on Windows, they don’t have namespaces and control groups. So, developers use Hyper-V virtual hosts to create this isolation. However, [Windows 10 Home does not support Hyper-V functions](https://docs.microsoft.com/en-us/virtualization/hyper-v-on-windows/reference/hyper-v-requirements). Hyper-V specifically provides [hardware virtualization and process isolation](https://docs.microsoft.com/en-us/virtualization/hyper-v-on-windows/about/). That’s why we need the legacy Docker toolbox.

Docker Toolbox is a solution that uses Oracle’s **VirtualBox** Headless mode to run Docker on a Linux virtual container.

![](/images/using-docker-on-windows-10-home-edition/image1.png)

## Explaining the trick

The **trick** here is that Docker is separated into two parts. A docker client and an engine daemon. So, Toolbox uses a tool, called [docker-machine](https://docs.docker.com/v17.09/machine/overview/) to create a Linux virtual machine and run a Docker Engine inside it. It’s not a native solution but works very well. The Docker client may be used to control not only a local docker but a remote one too. So, we only need this windows client (included on toolbox) and point it to our virtual server. This can be done settings some environment variables, and the command docker-machine.exe env teaches you how to do this. I will talk about docker-machine utility in another post.

But, to be more productive, Toolbox comes with a utility shell script that checks it docker’s VM machine is running and starts it if not. It’s used through the Docker Quickstart Terminal link created on Windows' Start Menu. This link simply call a git's bash.exe (or some other Linux terminal ported to windows) and execute a start.sh (you can see it [here](https://github.com/docker/toolbox/blob/master/windows/start.sh)).

*Do you know best practices and more information about running Docker on Windows Home edition? Share it on comments!*

*Also published at [medium.com](https://medium.com/@begrossi/using-docker-on-windows-10-home-edition-6423ee8c5fcc) on May 3, 2019 and at [dev.to](https://dev.to/begrossi/using-docker-on-a-windows-10-home-edition-2k08) on Jan 5, 2020.*


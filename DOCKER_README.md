# Docker Guide for FindMyAI Buddy

This guide explains how to pull and run the FindMyAI Buddy application from Docker Hub.

## Overview

The application is hosted on Docker Hub as `santhoshs19032003/tools-ainewstoday` and is built with:

- **Builder Stage**: Uses Node.js 20 Alpine to install dependencies and build the React application
- **Runtime Stage**: Uses Nginx Alpine to serve the built static assets

## Prerequisites

- Docker installed on your system ([Install Docker](https://docs.docker.com/get-docker/))
- Docker Compose (optional, for easier management)

## Pulling the Docker Image

### Pull the latest image from Docker Hub:

```bash
docker pull santhoshs19032003/tools-ainewstoday:latest
```

### Pull a specific version:

```bash
docker pull santhoshs19032003/tools-ainewstoday:release_v0.1
```

## Running the Application

### Run with Docker:

```bash
docker run -d -p 8080:80 --name findmyai-buddy santhoshs19032003/tools-ainewstoday:latest
```

**Options explained:**

- `-d` : Run in detached mode (background)
- `-p 8080:80` : Map host port 8080 to container port 80
- `--name findmyai-buddy` : Give the container a readable name
- `santhoshs19032003/tools-ainewstoday:latest` : Use the pre-built image from Docker Hub

### Access the application:

Open your browser and navigate to:

```
http://localhost:8080
```

## Managing Docker Containers

### View running containers:

```bash
docker ps
```

### View all containers (including stopped):

```bash
docker ps -a
```

### Stop a running container:

```bash
docker stop findmyai-buddy
```

### Start a stopped container:

```bash
docker start findmyai-buddy
```

### Remove a container:

```bash
docker rm findmyai-buddy
```

### View container logs:

```bash
docker logs findmyai-buddy
```

### Follow logs in real-time:

```bash
docker logs -f findmyai-buddy
```

## Docker Image Management

### List all images:

```bash
docker images
```

### Remove an image:

```bash
docker rmi santhoshs19032003/tools-ainewstoday:latest
```

### Inspect an image:

```bash
docker inspect santhoshs19032003/tools-ainewstoday:latest
```

## Using Docker Compose (Optional)

Create a `docker-compose.yml` file in the project root:

```yaml
version: "3.8"

services:
  findmyai-buddy:
    image: santhoshs19032003/tools-ainewstoday:latest
    ports:
      - "8080:80"
    container_name: findmyai-buddy
    restart: unless-stopped
```

### Run with Docker Compose:

```bash
docker-compose up -d
```

### Stop with Docker Compose:

```bash
docker-compose down
```

### View logs with Docker Compose:

```bash
docker-compose logs -f
```

## Docker Hub Repository

The application is automatically built and pushed to Docker Hub via GitHub Actions when pushing to the `release_v0.1` branch.

**Docker Hub Image:** `santhoshs19032003/tools-ainewstoday`

**Available Tags:**

- `latest` - Latest stable version
- `release_v0.1` - Version 0.1 release

No manual build or push is needed. Simply pull and run the image from Docker Hub.

## Dockerfile Breakdown

```dockerfile
# Stage 1: Builder
FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Runtime
FROM nginx:stable-alpine AS runtime
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

**Key points:**

- Uses Alpine Linux for smaller image size
- `npm ci` ensures reproducible builds
- Only the built assets are copied to the final image, not source code
- Nginx runs in foreground mode for proper Docker signal handling

## Troubleshooting

### Port already in use:

If port 8080 is already in use, map to a different port:

```bash
docker run -d -p 9090:80 --name findmyai-buddy santhoshs19032003/tools-ainewstoday:latest
```

### Container exits immediately:

Check the logs:

```bash
docker logs findmyai-buddy
```

### Image pull fails:

Ensure you have Docker Hub access and try pulling again:

```bash
docker pull santhoshs19032003/tools-ainewstoday:latest
```

### Permission denied errors:

Add your user to the Docker group (Linux only):

```bash
sudo usermod -aG docker $USER
newgrp docker
```

## Performance Tips

1. **Image size**: Alpine-based images are smaller and faster to download
2. **Pull efficiency**: Use specific tags instead of `latest` for reproducibility
3. **Container reuse**: Stop and start containers instead of removing and recreating them
4. **Local caching**: Once pulled, the image is cached locally for faster subsequent runs

## Security Best Practices

1. Don't run Docker commands with `--privileged` flag unless necessary
2. Use specific image versions (e.g., `release_v0.1`) instead of `latest` for production
3. Regularly pull updated images to get security patches
4. Don't pass secrets as environment variables in Docker commands (use Docker secrets or external configuration)
5. The images are built with multi-stage builds to exclude build dependencies

## Environment Variables

Currently, the application doesn't require environment variables to run. If needed in the future, pass them using:

```bash
docker run -d -p 8080:80 -e KEY=value --name findmyai-buddy santhoshs19032003/tools-ainewstoday:latest
```

## CI/CD Pipeline

The GitHub Actions workflow automatically:

1. Triggers on pushes to `release_v0.1` branch
2. Builds and pushes the Docker image to Docker Hub
3. Images are available as `santhoshs19032003/tools-ainewstoday`
4. Tagged with both branch name (`release_v0.1`) and `latest`

## Common Commands Reference

| Command                                                        | Purpose                 |
| -------------------------------------------------------------- | ----------------------- |
| `docker pull santhoshs19032003/tools-ainewstoday`              | Pull the image          |
| `docker run -d -p 8080:80 santhoshs19032003/tools-ainewstoday` | Run a container         |
| `docker ps`                                                    | List running containers |
| `docker logs container-name`                                   | View container logs     |
| `docker stop container-name`                                   | Stop a container        |
| `docker rm container-name`                                     | Remove a container      |
| `docker images`                                                | List all images         |
| `docker rmi image-name:tag`                                    | Remove an image         |

## Additional Resources

- [Docker Documentation](https://docs.docker.com/)
- [Docker Best Practices](https://docs.docker.com/develop/dev-best-practices/)
- [Nginx Documentation](https://nginx.org/en/docs/)

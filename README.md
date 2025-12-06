# Docker Hub - FindMyAI Buddy

**Repository:** [`santhoshs19032003/tools-ainewstoday`](https://hub.docker.com/r/santhoshs19032003/tools-ainewstoday)

This is the official Docker Hub repository for the FindMyAI Buddy application. The image is automatically built and published to Docker Hub via CI/CD pipeline.

## Quick Start

Pull and run the application in one command:

```bash
docker run -d -p 8080:80 santhoshs19032003/tools-ainewstoday:latest
```

Then open your browser to `http://localhost:8080`

## Image Information

- **Registry:** Docker Hub
- **Namespace:** `santhoshs19032003`
- **Repository:** `tools-ainewstoday`
- **Base Image:** Nginx Alpine (optimized, lightweight runtime)
- **Size:** ~50MB (Alpine-based, multi-stage build)

## Available Tags

| Tag            | Description           |
| -------------- | --------------------- |
| `latest`       | Latest stable release |
| `release_v0.1` | Version 0.1 release   |

## Prerequisites

- Docker installed on your system ([Install Docker](https://docs.docker.com/get-docker/))
- ~100MB disk space

## Pulling the Image

### Pull the latest version:

```bash
docker pull santhoshs19032003/tools-ainewstoday:latest
```

### Pull a specific version:

```bash
docker pull santhoshs19032003/tools-ainewstoday:release_v0.1
```

### View all available tags:

Visit: https://hub.docker.com/r/santhoshs19032003/tools-ainewstoday/tags

## Running the Container

### Basic usage:

```bash
docker run -d -p 8080:80 --name findmyai-buddy santhoshs19032003/tools-ainewstoday:latest
```

### Run on a different port:

```bash
docker run -d -p 9090:80 --name findmyai-buddy santhoshs19032003/tools-ainewstoday:latest
```

### Run with auto-restart:

```bash
docker run -d --restart unless-stopped -p 8080:80 --name findmyai-buddy santhoshs19032003/tools-ainewstoday:latest
```

**Options explained:**

- `-d` : Run in detached mode (background)
- `-p 8080:80` : Map host port 8080 to container port 80
- `--name findmyai-buddy` : Container name for easy reference
- `--restart unless-stopped` : Automatically restart if container crashes
- `santhoshs19032003/tools-ainewstoday:latest` : Image from Docker Hub

Access the app at `http://localhost:8080`

## Container Management

### List running containers:

```bash
docker ps
```

### View all containers:

```bash
docker ps -a
```

### Stop a container:

```bash
docker stop findmyai-buddy
```

### Start a stopped container:

```bash
docker start findmyai-buddy
```

### Restart a container:

```bash
docker restart findmyai-buddy
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

### Access container shell:

```bash
docker exec -it findmyai-buddy /bin/sh
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

## Using Docker Compose

Create a `docker-compose.yml` file:

```yaml
version: "3.8"

services:
  findmyai-buddy:
    image: santhoshs19032003/tools-ainewstoday:latest
    container_name: findmyai-buddy
    ports:
      - "8080:80"
    restart: unless-stopped
    networks:
      - app-network

networks:
  app-network:
    driver: bridge
```

### Start with Docker Compose:

```bash
docker-compose up -d
```

### View logs:

```bash
docker-compose logs -f
```

### Stop services:

```bash
docker-compose down
```

## Image Details

### What's Included

- **Frontend:** React application built with Vite
- **UI Components:** Shadcn/ui component library
- **Styling:** Tailwind CSS
- **Server:** Nginx Alpine
- **Build:** Multi-stage Docker build for optimal size

### What's NOT Included

- Build tools (Node.js, npm) - only runtime assets
- Source code - only compiled assets
- Development dependencies

This ensures a minimal, secure image (~50MB).

## CI/CD Pipeline

The image is automatically built and pushed to Docker Hub whenever code is pushed to the `release_v0.1` branch:

1. **Trigger:** Push to `release_v0.1` branch
2. **Build:** Multi-stage Docker build (Node.js → Nginx)
3. **Push:** Automatically published to Docker Hub
4. **Tags:** Tagged as `latest` and `release_v0.1`

No manual build or push required!

## Troubleshooting

### Port already in use:

```bash
# Find what's using port 8080
lsof -i :8080

# Use a different port
docker run -d -p 9090:80 santhoshs19032003/tools-ainewstoday:latest
```

### Container exits immediately:

```bash
# Check logs for errors
docker logs findmyai-buddy

# Ensure image is properly pulled
docker pull santhoshs19032003/tools-ainewstoday:latest
```

### Can't connect to container:

```bash
# Verify container is running
docker ps | grep findmyai-buddy

# Check port mapping
docker port findmyai-buddy

# Test connectivity
curl http://localhost:8080
```

### Out of disk space:

```bash
# Remove unused Docker objects
docker system prune -a

# Or specifically remove old images
docker rmi santhoshs19032003/tools-ainewstoday:old-tag
```

### Docker Hub rate limiting:

If you get rate limit errors:

```bash
# Log in to Docker Hub
docker login

# Pull the image
docker pull santhoshs19032003/tools-ainewstoday:latest
```

## Performance Tips

1. **Image size**: Alpine-based images are smaller and faster to download
2. **Pull efficiency**: Use specific tags instead of `latest` for reproducibility
3. **Container reuse**: Stop and start containers instead of removing and recreating them
4. **Local caching**: Once pulled, the image is cached locally for faster subsequent runs

## Security Best Practices

1. **Use specific tags:** Pin to `release_v0.1` instead of `latest` for production
2. **Run as non-root:** The container runs with a non-root user
3. **No privileged mode:** Use `--cap-add` only if necessary
4. **Scan for vulnerabilities:** Use `docker scout` to check for CVEs
5. **Keep updated:** Regularly pull new images for security patches
6. **Don't pass secrets:** Use Docker secrets or environment variables from `.env`

## Multi-Architecture Support

The Docker Hub image supports multiple architectures:

- `linux/amd64` - Intel/AMD 64-bit
- `linux/arm64` - ARM 64-bit (Apple Silicon, Raspberry Pi 4+)
- `linux/arm/v7` - ARM 32-bit (Raspberry Pi 3, older boards)

Docker automatically pulls the correct architecture for your system.

## Environment Variables

Currently, the application doesn't require environment variables to run. If needed in the future, pass them using:

```bash
docker run -d -p 8080:80 -e KEY=value --name findmyai-buddy santhoshs19032003/tools-ainewstoday:latest
```

## Updating the Image

### Check for new versions:

```bash
docker pull santhoshs19032003/tools-ainewstoday:latest
```

### If updated, replace the container:

```bash
# Stop old container
docker stop findmyai-buddy

# Remove old container
docker rm findmyai-buddy

# Run new container
docker run -d -p 8080:80 --name findmyai-buddy santhoshs19032003/tools-ainewstoday:latest
```

## Common Issues Reference

| Issue              | Solution                                                    |
| ------------------ | ----------------------------------------------------------- |
| Image not found    | Run `docker pull santhoshs19032003/tools-ainewstoday` first |
| Connection refused | Check port mapping with `docker port findmyai-buddy`        |
| Out of memory      | Increase Docker's memory limit in settings                  |
| Slow performance   | Check `docker stats findmyai-buddy` for resource usage      |
| Can't write files  | Mount a volume with `-v /path:/app/data`                    |

## Docker Hub Links

- **Repository:** https://hub.docker.com/r/santhoshs19032003/tools-ainewstoday
- **Tags:** https://hub.docker.com/r/santhoshs19032003/tools-ainewstoday/tags
- **Builds:** Automated via GitHub Actions

## Reference Commands

```bash
# Pull latest
docker pull santhoshs19032003/tools-ainewstoday:latest

# Run container
docker run -d -p 8080:80 --name findmyai-buddy santhoshs19032003/tools-ainewstoday:latest

# View running containers
docker ps

# View logs
docker logs -f findmyai-buddy

# Stop container
docker stop findmyai-buddy

# Start container
docker start findmyai-buddy

# Remove container
docker rm findmyai-buddy

# Remove image
docker rmi santhoshs19032003/tools-ainewstoday:latest

# Check resource usage
docker stats findmyai-buddy

# Inspect container
docker inspect findmyai-buddy

# Update image
docker pull santhoshs19032003/tools-ainewstoday:latest
```

## Additional Resources

- [Docker Documentation](https://docs.docker.com/)
- [Docker Hub Documentation](https://docs.docker.com/docker-hub/)
- [Docker Compose Documentation](https://docs.docker.com/compose/)
- [Nginx Documentation](https://nginx.org/en/docs/)

pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git credentialsId: 'b9d61b5e-abd4-40dc-a87c-0c02bdb52a51',
                    url: 'https://primuspartners@dev.azure.com/primuspartners/Test/_git/Test',
                    branch: 'master'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    echo "📦 Building Docker Image"
                    sh 'docker build --no-cache -t test-app .'
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    echo "🚀 Running Docker Container"

                    // Stop and remove previous container if running
                    sh 'docker stop test-app-container || true'
                    sh 'docker rm -f test-app-container || true'

                    // 🔥 RUN without --env-file if .env is already copied into image
                    sh 'docker run -d --name test-app-container -p 1337:1337 test-app'
                }
            }
        }
    }
}

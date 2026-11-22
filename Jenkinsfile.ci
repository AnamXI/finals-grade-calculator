pipeline {
    agent any

    tools {
        // Matches the exact name we just configured in Jenkins
        nodejs 'NodeJS-22'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install and Test') {
            steps {
                sh 'npm ci'
                sh 'npm test -- --watchAll=false'
            }
        }

        stage('Coverage') {
            steps {
                sh 'npm test -- --coverage --watchAll=false'
            }
        }

        stage('SonarQube Analysis') {
            when {
                branch 'main' 
            }
            steps {
                withSonarQubeEnv('SonarQube') {
                    // Installs the scanner locally in the workspace and runs it
                    sh 'npm install -g sonarqube-scanner'
                    sh 'sonar-scanner'
                }
            }
        }

        stage('Quality Gate') {
            when {
                branch 'main'
            }
            steps {
                timeout(time: 5, unit: 'MINUTES') {
                    waitForQualityGate abortPipeline: true
                }
            }
        }

        stage('Build') {
            when {
                anyOf {
                    branch 'main'
                    branch 'develop'
                }
            }
            steps {
                sh 'npm run build'
            }
        }

        stage('Archive Artifact') {
            when {
                branch 'main'
            }
            steps {
                // Packages the build folder and Dockerfile into a versioned tar.gz
                sh 'tar -czf react-app-${BUILD_NUMBER}.tar.gz build/ Dockerfile'
                archiveArtifacts artifacts: 'react-app-*.tar.gz', fingerprint: true
            }
        }
    }
}
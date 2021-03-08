pipeline {
    agent any

    stages {
        stage ("build") {
            steps {
                echo 'executing npm install...'
                nodejs('Node-12.21') {
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }

        stage ("test") {
            steps {
                echo 'Testing pet-book...'
            }
        }

        stage ("deploy") {
            steps {
                echo "Deploying pet-book..."
            }
        }
    }
}